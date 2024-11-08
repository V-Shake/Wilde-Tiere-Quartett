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