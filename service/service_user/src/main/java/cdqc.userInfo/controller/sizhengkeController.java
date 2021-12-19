package cdqc.userInfo.controller;

import cdqc.common.result.Result;
import cdqc.model.Gymnasium;
import cdqc.model.sizhengke;
import cdqc.userInfo.service.sizhengkeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kerr
 * @create 2021-12-13 20:14
 */
@RestController
@RequestMapping("/admin/sizhengke/")
public class sizhengkeController {
    @Autowired
    private sizhengkeService sizhengkeService;
    @PostMapping("{id}")
    public Result getById(@PathVariable Long id){
        sizhengke byId = sizhengkeService.getById(id);
        return Result.ok(byId);
    }
}
