package com.backend.exclusive.configurations;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dqnmqwbqy",
                "api_key", "666116648429635",
                "api_secret", "QiQfDk4B1BXc9ECnnr6LARhmwTU"
        ));
    }
}
