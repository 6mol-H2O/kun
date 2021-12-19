package cdqc.userInfo.controller;

import cdqc.common.result.Result;
import cdqc.model.Plot;
import cdqc.userInfo.service.PlotService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kerr
 * @create 2021-11-25 23:52
 */
//@Api(tags="剧情设置")
@RestController
@RequestMapping("/admin/plot/")
public class PlotController {
    @Autowired
    PlotService plotService;
    @PostMapping("{id}")
    public Result getById(@PathVariable Long id){
        Plot byId = plotService.getById(id);
        return Result.ok(byId);
    }

}
