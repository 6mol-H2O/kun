package cdqc.userInfo.controller;

import cdqc.common.result.Result;
import cdqc.model.UserInfo;
import cdqc.userInfo.service.UserInfoService;
import cdqc.vo.UserInfoVo;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Kerr
 * @create 2021-11-25 15:54
 */
@RestController
@RequestMapping("/admin/userinfo")
public class UserInfoController {
    private String openid;
    @GetMapping("/login")
    public String getUserInfo(@RequestParam(name = "code") String code) throws Exception {
        System.out.println("code" + code);
        String url = "https://api.weixin.qq.com/sns/jscode2session";
        url += "?appid=wx06b08a0551a0ab26";//自己的appid
        url += "&secret=7a3d2b2fca2786ae9e562f5e0cae73b1";//自己的appSecret
        url += "&js_code=" + code;
        url += "&grant_type=authorization_code";
        url += "&connect_redirect=1";
        String res = null;
        CloseableHttpClient httpClient = HttpClientBuilder.create().build();
        // DefaultHttpClient();
        HttpGet httpget = new HttpGet(url);    //GET方式
        CloseableHttpResponse response = null;
        // 配置信息
        RequestConfig requestConfig = RequestConfig.custom()          // 设置连接超时时间(单位毫秒)
                .setConnectTimeout(5000)                    // 设置请求超时时间(单位毫秒)
                .setConnectionRequestTimeout(5000)             // socket读写超时时间(单位毫秒)
                .setSocketTimeout(5000)                    // 设置是否允许重定向(默认为true)
                .setRedirectsEnabled(false).build();           // 将上面的配置信息 运用到这个Get请求里
        httpget.setConfig(requestConfig);                         // 由客户端执行(发送)Get请求
        response = httpClient.execute(httpget);                   // 从响应模型中获取响应实体
        HttpEntity responseEntity = response.getEntity();
        System.out.println("响应状态为:" + response.getStatusLine());
        if (responseEntity != null) {
            res = EntityUtils.toString(responseEntity);
            System.out.println("响应内容长度为:" + responseEntity.getContentLength());
            System.out.println("响应内容为:" + res);
        }
        // 释放资源
        if (httpClient != null) {
            httpClient.close();
        }
        if (response != null) {
            response.close();
        }
        JSONObject jo = JSON.parseObject(res);
        String openid = jo.getString("openid");
        System.out.println("openid" + openid);
        this.openid=openid;
        return openid;
    }
    @Autowired
    private UserInfoService userInfoService;
    @GetMapping("/sign")
    public Result sign(){
        QueryWrapper<UserInfo> wrapper=new QueryWrapper<>();
        wrapper.eq("openid",this.openid);
        UserInfo one = userInfoService.getOne(wrapper);
        if(one==null){
            UserInfo userInfo = new UserInfo();
            userInfo.setOpenid(this.openid);
            boolean b = userInfoService.save(userInfo);
            if(b){
                return Result.ok(userInfo);
            }else {
                return Result.fail();
            }
        }else {
            return Result.ok(one);
        }
    }
    @PostMapping("getById/{id}")
    public Result getById(@PathVariable Long id){
        return Result.ok(userInfoService.getById(id));
    }
    @PostMapping("/update")
    public Result update(@RequestBody UserInfo userInfo){
        boolean b = userInfoService.updateById(userInfo);
        if(b){
            return Result.ok();
        }else {
            return Result.fail();
        }
    }
}
