package com.masterlab.controller;

import com.masterlab.model.RepairOrder;
import com.masterlab.repository.RepairRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Repairs", description = "API заказов на ремонт")
@RestController
@RequestMapping("/api/repairs")
@CrossOrigin
public class RepairController {

    private final RepairRepository repairRepository;

    public RepairController(RepairRepository repairRepository) {
        this.repairRepository = repairRepository;
    }

    @Operation(summary = "Получить все заказы", description = "Возвращает список всех заказов на ремонт из БД")
    @GetMapping
    public List<RepairOrder> getAllOrders() {
        return repairRepository.findAll();
    }
}
