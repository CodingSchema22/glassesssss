// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => {
    box.addEventListener('change', () => {
      const selected = Array.from(checkboxes)
        .filter(b => b.checked)
        .map(b => b.id);
      console.log("Selected checkboxes:", selected);
    });
  });

  // --------- Price Slider ---------
  const priceSlider = document.querySelector('input[type="range"]');
  const priceValues = document.querySelector('.price-values span:last-child');

  priceSlider.addEventListener('input', () => {
    priceValues.textContent = `₹${priceSlider.value}`;
    console.log("Selected price:", priceSlider.value);
  });

  // --------- Color Circles ---------
  const colorCircles = document.querySelectorAll('.color-circle');
  let selectedColors = [];

  colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
      const color = circle.classList[1]; // e.g., "color-red"

      // Toggle selection
      if (selectedColors.includes(color)) {
        selectedColors = selectedColors.filter(c => c !== color);
        circle.style.outline = '';
      } else {
        selectedColors.push(color);
        circle.style.outline = '3px solid #007BFF';
      }

      console.log("Selected colors:", selectedColors);
    });
  });

  // --------- Reset Buttons ---------
  const resetButtons = document.querySelectorAll('.filter-group button');

  resetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.parentElement;

      // Reset checkboxes
      const groupCheckboxes = group.querySelectorAll('input[type="checkbox"]');
      groupCheckboxes.forEach(cb => cb.checked = false);

      // Reset price
      const slider = group.querySelector('input[type="range"]');
      if (slider) {
        slider.value = 1320;
        priceValues.textContent = `₹1320`;
      }

      // Reset colors
      const colors = group.querySelectorAll('.color-circle');
      colors.forEach(c => c.style.outline = '');
      selectedColors = [];

      console.log(`Reset group: ${group.querySelector('h3')?.textContent}`);
    });
  });

    document.getElementById('productTypeSearch').addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const options = document.querySelectorAll('#productTypeOptions .filter-option');
  options.forEach(option => {
    const label = option.textContent.toLowerCase();
    option.style.display = label.includes(searchValue) ? 'block' : 'none';
  });
});