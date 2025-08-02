package com.project;

public class DataService {
    private final DataProvider provider;

    public DataService(DataProvider provider) {
        this.provider = provider;
    }

    public String getData() {
        return provider.fetch();
    }
}
