function SecuDesce(num) {
    if (num >= 0) {
      console.log(num);
      SecuDesce(num - 1);
    }
  }
  // Imprime la secuencia descendente desde 15 hasta 0
  SecuDesce(15);