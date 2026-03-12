package com.masterlab.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "Контент от ИИ-агентов, ожидающий проверки")
@Entity
@Table(name = "content_awaiting")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContentAwaiting {

    @Schema(description = "Уникальный идентификатор")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Schema(description = "Заголовок статьи")
    @Column(nullable = false)
    private String title;

    @Schema(description = "Исходный текст статьи")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String rawText;

    @Schema(description = "Статус: PENDING (на проверке) или PUBLISHED (опубликовано)")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ContentStatus status = ContentStatus.PENDING;
}
