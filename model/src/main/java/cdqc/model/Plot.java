package cdqc.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Kerr
 * @create 2021-11-25 22:35
 */
@Data
@TableName("plotinfo")
public class Plot {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String text;
    private String picurl;
    private long protagonist;
    private long chum;
    private long dialog;
    private long game;
    private long chan;
}
