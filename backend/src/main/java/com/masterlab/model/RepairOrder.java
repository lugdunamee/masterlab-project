package com.masterlab.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "Заказ на ремонт")
@Entity
@Table(name = "repair_order")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RepairOrder {

    @Schema(description = "Уникальный идентификатор")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Schema(description = "ФИО клиента", example = "Иванов А.С.")
    @Column(nullable = false)
    private String clientName;

    @Schema(description = "Устройство на ремонт", example = "iPhone 14 Pro")
    @Column(nullable = false)
    private String device;

    @Schema(description = "Статус заказа", example = "В работе")
    @Column(nullable = false)
    private String status;
}
