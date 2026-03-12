package com.masterlab.controller;

import com.masterlab.dto.ContentUploadRequest;
import com.masterlab.model.ContentAwaiting;
import com.masterlab.model.ContentStatus;
import com.masterlab.repository.ContentAwaitingRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Content", description = "API приёма контента от ИИ-агентов")
@RestController
@RequestMapping("/api/content")
@CrossOrigin
public class ContentController {

    private final ContentAwaitingRepository contentRepository;

    public ContentController(ContentAwaitingRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    @Operation(summary = "Загрузить статью", description = "Принимает текст от ИИ-агента на проверку. Статус: PENDING.")
    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.CREATED)
    public ContentAwaiting upload(@RequestBody ContentUploadRequest request) {
        ContentAwaiting content = new ContentAwaiting();
        content.setTitle(request.getTitle() != null ? request.getTitle() : "Без заголовка");
        content.setRawText(request.getRawText() != null ? request.getRawText() : "");
        content.setStatus(ContentStatus.PENDING);
        return contentRepository.save(content);
    }
}
