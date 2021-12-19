package cdqc.userInfo.controller;

import cdqc.common.result.Result;
import cdqc.model.Gymnasium;
import cdqc.userInfo.service.GymnasiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kerr
 * @create 2021-12-12 19:30
 */
@RestController
@RequestMapping("/admin/gymnasium/")
public class GymnasiumController {
    @Autowired
    private GymnasiumService gymnasiumService;
    @PostMapping("{id}")
    public Result getById(@PathVariable Long id){
        Gymnasium byId = gymnasiumService.getById(id);
        return Result.ok(byId);
    }
}
