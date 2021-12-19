package cdqc.userInfo.controller;

import cdqc.common.result.Result;
import cdqc.model.library;
import cdqc.userInfo.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kerr
 * @create 2021-12-12 19:15
 */
@RestController
@RequestMapping("/admin/library")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;
    @PostMapping("/{id}")
    public Result getById(@PathVariable Long id){
        library byId = libraryService.getById(id);
        return Result.ok(byId);
    }
}
