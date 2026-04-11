function analyze(){
let input=document.getElementById('input').value||"";
let notes="";

// spring config
if(input.includes("application.properties") || input.includes("application.yml")){
  notes += "Spring Boot config detected.\n";
}

// REST API
if(input.includes("@RestController") || input.includes("@GetMapping")){
  notes += "REST controller detected.\n";
}

// request mapping
if(input.includes("@RequestMapping")){
  notes += "Request mapping found.\n";
}

// endpoint extractor
if(input.includes("@GetMapping") || input.includes("@PostMapping")){
  notes += "Endpoints detected.\n";
}

// contract validator
if(input.includes("DTO") || input.includes("ResponseEntity")){
  notes += "API contract structures detected.\n";
}

// microservices
if(input.includes("FeignClient") || input.includes("RestTemplate")){
  notes += "Microservice communication detected.\n";
}

if(!notes) notes="No backend/API patterns detected.";

document.getElementById('result').innerText =
"Backend Analysis:\n"+notes;
}
