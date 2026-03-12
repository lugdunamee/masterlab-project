package com.masterlab.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "Запрос на загрузку контента от ИИ-агента")
public class ContentUploadRequest {

    @Schema(description = "Заголовок статьи", example = "Как выбрать смартфон в 2025")
    private String title;

    @Schema(description = "Исходный текст статьи")
    private String rawText;
}
