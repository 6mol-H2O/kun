package cdqc.userInfo.controller;

import cdqc.common.result.Result;
import cdqc.model.Activity;
import cdqc.userInfo.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kerr
 * @create 2021-12-12 19:50
 */
@RestController
@RequestMapping("/admin/activity/")
public class ActivityController {
    @Autowired
    private ActivityService activityService;
    @PostMapping("{id}")
    public Result getById(@PathVariable Long id){
        Activity byId = activityService.getById(id);
        return Result.ok(byId);
    }
}
