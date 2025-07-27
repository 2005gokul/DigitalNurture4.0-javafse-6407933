package com.eligibilitychecker;

public class Eligibility {
    public boolean isEligible(int attendancePercent, int internalMarks) {
        return attendancePercent >= 75 && internalMarks >= 40;
    }
}