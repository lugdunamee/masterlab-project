package com.masterlab.repository;

import com.masterlab.model.RepairOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepairRepository extends JpaRepository<RepairOrder, Long> {
}
