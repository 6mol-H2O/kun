package cdqc.userInfo.service.impl;

import cdqc.model.Activity;
import cdqc.userInfo.mapper.ActivityMapper;
import cdqc.userInfo.service.ActivityService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * @author Kerr
 * @create 2021-12-12 19:48
 */
@Service
public class ActivityServiceImpl extends ServiceImpl<ActivityMapper, Activity> implements ActivityService {
}
