package cdqc.userInfo.service.impl;

import cdqc.userInfo.mapper.LibraryMapper;
import cdqc.userInfo.service.LibraryService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cdqc.model.library;
import org.springframework.stereotype.Service;

/**
 * @author Kerr
 * @create 2021-12-12 19:14
 */
@Service
public class LibraryServiceImpl extends ServiceImpl<LibraryMapper,library> implements LibraryService {
}
