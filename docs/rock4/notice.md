---
sidebar_label: '注意事项'
sidebar_position: 2
---
# 注意事项

## 电气规格

### 电源要求

ROCK 5B只能通过以下方式供电：

- USB C PD 电源适配器
- 来自 GPIO PIN 2 和 4 的 5V 电源

建议的电源容量至少为 24W（不带 M.2 SSD）或 36W（带 M.2）
固态硬盘

### GPIO电压

| GPIO       | Voltage Level | Tolerance |
|------------|---------------|-----------|
| GPIO3_C0   | 3.3V          | 3.465V    |
| ADC_IN0    |  1.8V         | 1.98V     |
| Other GPIO |  3.0V         | 3.14V     |
