package com.masterlab.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI masterLabOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("MasterLab Global Conveyor API")
                        .description("REST API для системы управления ремонтами. Документация для ИИ-агентов.")
                        .version("1.0")
                        .contact(new Contact()
                                .name("MasterLab")));
    }
}
