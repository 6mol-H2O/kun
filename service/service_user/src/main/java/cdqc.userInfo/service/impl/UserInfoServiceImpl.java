package cdqc.userInfo.service.impl;

import cdqc.model.UserInfo;
import cdqc.userInfo.mapper.UserInfoMapper;
import cdqc.userInfo.service.UserInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * @author Kerr
 * @create 2021-11-25 15:53
 */
@Service
public class UserInfoServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {
}
