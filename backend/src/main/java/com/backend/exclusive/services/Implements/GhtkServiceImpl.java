package com.backend.exclusive.services.Implements;

import com.backend.exclusive.services.GhtkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GhtkServiceImpl implements GhtkService {
    @Value("${ghtk.api.url}")
    private String apiUrl;

    @Value("${ghtk.api.token}")
    private String apiToken;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public String calculateShippingFee(Object feeRequest) {
        String url = apiUrl + "/services/shipment/fee";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Token", apiToken);

        HttpEntity<Object> request = new HttpEntity<>(feeRequest, headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, request, String.class);

        return response.getBody();
    }
}
