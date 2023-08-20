const words = [
    '1. Gesture (n)',
    '2. Means (n)',
    '3. Facilitate (v)',
    '4. Systematic (adj)',
    '5. Myth (n)',
    '6. Inferior (adj)',
    '7. Comparative (adj)',
    '8. Cognition (n)',
    '9. Quip (v)',
    '10. Imply (v)',
    '11. Classification (n)',
    '12. Evolve (v)',
    '13. Distinction (n)',
    '14. Blur (v)',
    '15. Complexities (n)',
    '16. Stem from (v)',
    '17. Alternate (v)',
    '18. Fit in (v)',
    '19. Convey (v)',
    '20. Taboo (adj)',
    '21. Utterance (n)',
    '22. Substandard (adj)',
    '23. Competence (n)',
    '24. Grasp (n)',
    '25. Bring about (phr.v)',
    '26. Collapse (n)',
    '27. Defect (n)',
    '28. Executive (adj)',
    '29. Implication (n)',
    '30. Repercussion (n)',
    '31. Retirement (n)',
    '32. Violation (n)',
    '33. Inclusive (adj)',
    '34. Initiative (n)',
    '35. Primary (adj)',
    '36. Promote (v)',
    '37. Single-minded (adj)',
    '38. Substantial (adj)',
    '39. Supplier (n)',
    '40. Target (v)',
    '41. Commitment (n)',
    '42. Consumption (n)',
    '43. Dedicated (adj)',
    '44. Productivity (n)',
    '45. Reputation (n)',
    '46. Staggering (adj)',
    '47. Turnover (n)',
    '48. Ultimately (adv)',
    '49. Anomaly (n)',
    '50. Atmosphere (n)',
    '51. Cycle (n)',
    '52. Dramatically (adv)',
    '53. Factor (n)',
    '54. Variability (n)',
    '55. Absorb (v)',
    '56. Drive (v)',
    '57. Emission (n)',
    '58. Emit (v)',
    '59. Potential (n)',
    '60. Retain (v)',
    '61. Shift (n)',
    '62. Characterize (v)',
    '63. Equator (n)',
    '64. Humid (adj)',
    '65. Predictable (adj)',
    '66. Reverse (v)',
    '67. Vary (v)',
    '68. Abundant (adj)',
    '69. Account for (v)',
    '70. Decay (n)',


    


    
    
    // Thêm các từ vựng khác vào đây
  ];
  
  const generateButton = document.getElementById("generateButton");
  const randomWordElement = document.getElementById("randomWord");
  
  let remainingWords = [...words]; // Tạo một bản sao của danh sách từ vựng

generateButton.addEventListener("click", () => {
  if (remainingWords.length === 0) {
    randomWordElement.textContent = "All words used. Reset the list.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  const randomWord = remainingWords[randomIndex];

  // Loại bỏ từ đã chọn khỏi danh sách còn lại
  remainingWords.splice(randomIndex, 1);

  randomWordElement.textContent = `Random word: ${randomWord}`;
});
  