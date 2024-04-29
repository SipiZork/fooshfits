const getShifts = async (request) => {
  const auth = document.getElementById('auth').value;
  console.log(auth);
  const now = new Date().toISOString();
  const end = new Date("2024.05.05 23:59").toISOString();

  request = `https://hu.usehurrier.com/api/rooster/v3/employees/1428799/available_swaps?start_at=${now}&end_at=${end}&city_id=1&with_time_zone=Europe%2FBudapest`;
  try {
    const response = await fetch(request, {
      method: 'GET',
      mode: 'cors',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      Host: 'hu.usehurrier.com',
      headers: new Headers({
        'Authorization': `Bearer ${auth}`,
        'Content-Type': 'application/json',
      })
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    console.log(response.json());
  } catch (error) {
    console.error("Error:", error);
  }
};
const btn = document.getElementById("get-shifts");
btn.addEventListener('click', () => {
  getShifts();
});