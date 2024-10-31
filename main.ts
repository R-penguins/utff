import 'bootstrap/dist/css/bootstrap.min.css';

function calculate(): void {
  const w2 = parseFloat((document.getElementById('w2_input') as HTMLInputElement).value);
  const f = parseFloat((document.getElementById('f_input') as HTMLInputElement).value);
  const relative_density = parseFloat((document.getElementById('relative_density_input') as HTMLInputElement).value);

  const result = relative_density * w2 / (f * relative_density - f + 1.0); // Replace with your specific calculation
  (document.getElementById('result') as HTMLSpanElement).innerText = result.toFixed(4).toString();
}

(window as any).calculate = calculate;
