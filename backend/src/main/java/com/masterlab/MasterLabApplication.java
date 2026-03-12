package com.masterlab;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
public class MasterLabApplication {

    public static void main(String[] args) {
        log.info("MASTERLAB SYSTEM ONLINE");
        SpringApplication.run(MasterLabApplication.class, args);
        log.info("MasterLab Global Conveyor — Система активна.");
    }
}
