$(document).ready(function () {
    $.each(data, function (index, animal) {
        let groupClass = `group-${animal.group}`;
        let divBox = $(`<div class="card-wrapper">
            <div class="card-content ${groupClass}">
            <img class="card-image border-bottom" src="images/${animal.group}${animal.group_number}.jpg" alt="${animal.name_german}" />
                <div class="card-number">${animal.group}${animal.group_number}</div>
                <div class="card-title">${animal.name_german}</div>
                <div class="card-trivia border-bottom">${animal.trivia_german}
                </div>
                <div class="group-rectangle">${animal.group}</div>
                <div class="groupname">${animal.groupname_german}</div>
                <div class="intelligence-box">
                <div class="intelligence-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bulb">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <path d="M9.7 17l4.6 0" />
                </svg>
                </div>
                <div class="intelligence-content">${animal.intelligence}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/weight.svg" alt="weight">
                        </div>
                        <div class="stat-content">${animal.max_weight}</div>
                    </div>

                    <div class="stat-pair">

                        <div class="stat-icon">
                            <img src="images/icons/length.svg" alt="length">

                        </div>
                        <div class="stat-content">${animal.max_length}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/age.svg" alt="max age">

                        </div>
                        <div class="stat-content">${animal.max_age}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/speed.svg" alt="max speed">

                        </div>
                        <div class="stat-content">${animal.top_speed}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/offspring.svg" alt="offspring per cycle">
                        </div>
                        <div class="stat-content">${animal.litter_size}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/death.svg" alt="caused yearly human casualties">
                        </div>
                        <div class="stat-content">${animal.deaths}</div>
                    </div>
                </div>
                <div class="card-bottom">${animal.continents}</div>
            </div>
    
        </div>`);
        $('#wrapper').append(divBox);
    });
});

