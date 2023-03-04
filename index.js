let all = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((response) => response.json())
    .then((data) => sceondFunction(data.data.tools));
};
all();

let sceondFunction = (info) => {
  info.forEach((e) => {
    let cards = document.getElementById("cards");
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="flex justify-center ">
    <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 insideCard">
        <a href="#!" data-te-ripple-init data-te-ripple-color="light">
          <img class="rounded-t-lg" src="${e.image}" alt="" />
        </a>
        <div class="p-6">
          <h5 class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Features
          </h5>
          <p class="mb-4 text-lg text-gray-500">
           ${e.features} 
          </p>
          <hr class="border-2 my-6" />
          <div class="flex justify-between items-center">
            <div id="left">
              <h5 class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                ${e.name}
              </h5>
              <div class="flex items-center space-x-4 justify-start py-3">
                <img src="./calendar.svg" alt="calendar" srcset="" />
                <span class="text-gray-500">${e.published_in}</span>
              </div>
            </div>
            <div id="right" class="mr-3">
              <a 
               id="clickMe"
                onclick="all_2(${e.id.toString()})"
                href=""
                data-te-toggle="modal"
                data-te-target="#exampleModalCenter"
                data-te-ripple-init
                data-te-ripple-color="light"
                data-te-ripple-init
                data-te-ripple-color="light"
                ><img src="./arrow-right-circle.svg" alt="arrow-right-circle"
              /></a>
            </div>
          </div>
        </div>
      </div>
      </div>
      `;

    cards.appendChild(card);

    // let seeMoreBtn = document.getElementById("seeMoreBtn");
    // if (card == false) {
    //   seeMoreBtn.classList.add("hidden");
    // }
  });
  
};

async function all_2(id) {
  const result = await fetch(`https://openapi.programming-hero.com/api/ai/tool/0${id}`);
  const data = await result.json();
  modalFunc(data.data);
}
// let all_2  = (id)=> {
//   fetch(`https://openapi.programming-hero.com/api/ai/tool/0${id}`)
//   .then((response) => response.json())
//   .then((data) => modalFunc(data.data))
// };

let modalFunc = (e) => {
  console.log(e);
  let modali = document.getElementById("modali");
  let sm_div = document.createElement("div");
  sm_div.innerHTML = `
  <div
  data-te-modal-init
  class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalCenter"
  tabindex="-1"
  aria-labelledby="exampleModalCenterTitle"
  aria-modal="true"
  role="dialog"
  >
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative flex h-auto w-auto mx-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]"
  >
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
    >
      <div
        class="flex flex-shrink-0 items-center justify-end rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
      >
        <div class="bg-blue-400 rounded-full flex items-center justify-center p-2">
          <button
            onclick="emtyHTML()"
            type="button"
            class="text-white box-content rounded border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div class="relative p-6">
        <!-- mokkka -->
        <div class="flex items-center flex-col md:flex-row justify-between space-x-6 my-6 m-4">
          <div class="bg-sky-200 p-3 rounded-2xl basis-1/2">
            <p class="text-2xl font-semibold text-gray-600 p-2 m-1">
              ${e.description}
            </p>
            <div class="flex items-center justify-between p-2 py-3 space-x-4">
              <div class="p-4 m-1 bg-white rounded-2xl">
                <p class="text-green-500 font-semibold text-center">${e.pricing[0].price} ${e.pricing[0].plan}</p>
              </div>
              <div class="p-4 m-1 bg-white rounded-2xl">
                <p class="text-yellow-500 font-semibold text-center">${e.pricing[1].price} ${e.pricing[1].plan}</p>
              </div>
              <div class="p-4 m-1 bg-white rounded-2xl">
                <p class="text-red-500 font-semibold text-center">${e.pricing[2].price} ${e.pricing[2].plan}</p>
              </div>
            </div>
            <div class="flex items-center space-x-6">
              <div class="p-2 m-4 mr-3">
                <h5 class="mb-2 text-2xl font-semibold text-gray-600 leading-tight dark:text-neutral-50">
                  Features
                </h5>
                <ul class="list-disc">
                  <li class="text-gray-500">${e.features[1].feature_name}</li>
                  <li class="text-gray-500">${e.features[2].feature_name}</li>
                  <li class="text-gray-500">${e.features[3].feature_name}</li>
                </ul>
              </div>
              <div class="p-2 m-4">
                <h5 class="mb-2 text-2xl font-semibold text-gray-600 leading-tight dark:text-neutral-50">
                  Integrations
                </h5>
                <ul class="list-disc">
                  <li class="text-gray-500">${e.integrations.map((x) => x)}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="rounded-2xl m-6">
            <div class="flex justify-center">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <div class="relative">
                  <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <img
                      class="rounded-t-lg"
                      src=${e.image_link[0]}
                      alt=""
                    />
                  </a>
                  <div class="absolute right-0 top-0">
                    <button
                      type="button"
                      class="text-white box-content rounded-2xl border-none hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none bg-pink-300 text-base p-2 px-3"
                      data-te-modal-dismiss
                      aria-label="Close"
                    >
                      94% Accuracy
                    </button>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-6 text-2xl font-semibold text-gray-600 leading-tight dark:text-neutral-50">
                    ${e.input_output_examples[0].input}
                  </h5>
                  <p class="mb-4 font-normal text-gray-500">
                  ${e.input_output_examples[1].input}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;

  modali.appendChild(sm_div);
};

let emtyHTML = () => {
  document.getElementById("modali").innerHTML = "";
};
