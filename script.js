const OPTIONS = {
  method: 'POST',
  //url: 'https://ip-location5.p.rapidapi.com/get_geo_info',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '3ef3f0e344mshf575f9cb157ddc5p1f32cajsn32fd8fc77511',
    'X-RapidAPI-Host': 'ip-location5.p.rapidapi.com'
  },
  //data: encodedParams,
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-location5.p.rapidapi.com/${ip}`, OPTIONS)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    return data
  })
  .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)
const $form = $("#form")
const $input = $("#input")
const $submit = $("#submit")
const $results = $("#results")

$form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const {value} = $input
  if(!value) return 

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo(value)
  console.log(ipInfo)

  if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.setAttribute('disabled')
  $submit.setAttribute('aria-busy')
})





