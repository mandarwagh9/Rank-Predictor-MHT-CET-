# Rank-Predictor-MHT-CET-
The application predicts students ranks based on their percentile scores
Certainly! The formula used in the calculateRank function predicts the rank based on the percentile entered by the user.

1. Formula: 
   - If the percentile is 100, the rank is set to 1.
   - For other percentiles (0 to 99), the rank is calculated using:

     rank = 310000 - (percentile / 100) * 310001
     
     - This formula adjusts the total participants (310000) by subtracting the position in the sequence based on the percentile.

2. Explanation:
   - percentile / 100 converts the percentile to a decimal fraction.
   - 310001 adjusts for zero-based indexing.
   - Subtracting this fraction from 310000 gives the estimated rank.

This straightforward calculation provides users with an approximate rank based on their percentile score, offering insights into their relative position among 310,000 participants.
