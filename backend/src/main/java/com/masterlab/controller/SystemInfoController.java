package com.masterlab.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Tag(name = "System", description = "Проверка статуса системы")
@RestController
@RequestMapping("/api")
@CrossOrigin
public class SystemInfoController {

    @Operation(summary = "Статус системы", description = "Возвращает ONLINE, если API доступен")
    @GetMapping("/status")
    public Map<String, String> getStatus() {
        return Map.of("status", "ONLINE");
    }
}
