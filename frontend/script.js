const submitButton = document.getElementById('submitButton');

const generatedText = document.getElementById('generatedText');
const qaContainer = document.getElementById('qaContainer');
const featuresContainer = document.getElementById('featuresContainer');
const embeddingContainer = document.getElementById('embeddingContainer');


submitButton.addEventListener('click', () => {

    const file = imageInput.files[0];

    if (!file) {
        alert('Please upload an image first.');
        return;
    }

    // Loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';

    generatedText.textContent = 'Analyzing image...';

    qaContainer.innerHTML = `
        <p class="text-blue-500">
            Generating questions and answers...
        </p>
    `;

    featuresContainer.innerHTML = `
        <p class="text-blue-500">
            Extracting visual features...
        </p>
    `;

    embeddingContainer.textContent = 'Generating embedding...';


    // Temporary mock processing
    setTimeout(() => {

        generatedText.textContent =
            'A person riding a bicycle on a road surrounded by trees.';


        qaContainer.innerHTML = `
            <div class="space-y-3">

                <div class="p-3 bg-white rounded border">
                    <p class="font-semibold">
                        Q: What is the person doing?
                    </p>
                    <p class="text-gray-600">
                        A: The person is riding a bicycle.
                    </p>
                </div>

                <div class="p-3 bg-white rounded border">
                    <p class="font-semibold">
                        Q: What is the person riding?
                    </p>
                    <p class="text-gray-600">
                        A: A bicycle.
                    </p>
                </div>

                <div class="p-3 bg-white rounded border">
                    <p class="font-semibold">
                        Q: Where is the person?
                    </p>
                    <p class="text-gray-600">
                        A: On a road.
                    </p>
                </div>

            </div>
        `;


        featuresContainer.innerHTML = `
            <div class="grid grid-cols-2 gap-3">

                <div class="bg-white p-3 rounded border">
                    <p class="text-sm text-gray-500">Objects</p>
                    <p class="font-semibold">
                        Person, Bicycle, Road
                    </p>
                </div>

                <div class="bg-white p-3 rounded border">
                    <p class="text-sm text-gray-500">Scene</p>
                    <p class="font-semibold">
                        Outdoor
                    </p>
                </div>

                <div class="bg-white p-3 rounded border">
                    <p class="text-sm text-gray-500">Dominant Color</p>
                    <p class="font-semibold">
                        Green
                    </p>
                </div>

                <div class="bg-white p-3 rounded border">
                    <p class="text-sm text-gray-500">Objects Count</p>
                    <p class="font-semibold">
                        3
                    </p>
                </div>

            </div>
        `;


        embeddingContainer.textContent =
            '[0.124, -0.382, 0.721, 0.091, ... , 0.442]';


        submitButton.disabled = false;
        submitButton.textContent = 'Submit Image';

    }, 2000);

});