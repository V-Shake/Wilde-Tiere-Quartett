$(document).ready(function () {
    $.each(data, function (index, animal) {
    let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
                <div class="card-number border-bottom">${animal.group}${animal.group_number}</div>
                <div class="card-title border-bottom">${animal.name_german}</div>
                <img class="card-image" src="images/${animal.group}${animal.group_number}.jpg" alt="${animal.name_german}" />
                <div class="card-trivia border-bottom">${animal.trivia_german}
                </div>
                <div class="stat-box">
                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/weight.png" alt="weight">
                        </div>
                        <div class="stat-content">${animal.max_weight}</div>
                    </div>

                    <div class="stat-pair">

                        <div class="stat-icon">
                            <img src="images/icons/length.png" alt="length">

                        </div>
                        <div class="stat-content">${animal.max_length}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/age.png" alt="max age">

                        </div>
                        <div class="stat-content">${animal.max_age}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/speed.png" alt="max speed">

                        </div>
                        <div class="stat-content">${animal.top_speed}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/offspring.png" alt="offspring per cycle">
                        </div>
                        <div class="stat-content">${animal.litter_size}</div>
                    </div>

                    <div class="stat-pair">
                        <div class="stat-icon">
                            <img src="images/icons/death.png" alt="caused yearly human casualties">
                        </div>
                        <div class="stat-content">${animal.deaths}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
        $('#wrapper').append(divBox);
    });
});

let div = document.createElement('div');
div.className = 'card-wrapper';
div.textContent = animal.name;
document.querySelector('main').appendChild(div);