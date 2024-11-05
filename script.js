const uploadBtn = document.querySelector("#upload-btn");
const inputUpload = document.querySelector("#image-upload");

const imageMain = document.querySelector(".main-image");
const nameImage = document.querySelector(".container-name-image p");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
});

const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve({ url: reader.result, name: file.name});
        };

        reader.onerror = () => {
            reject(`Erro na leitura do arquivo ${file.name}`);
        };

        reader.readAsDataURL(file);
    });
}

inputUpload.addEventListener("change", async (e) => {
    const arquivo = e.target.files[0];

    if (arquivo) {
        try {
            const contentFile = await readFile(arquivo);
            imageMain.src = contentFile.url;
            nameImage.textContent = contentFile.name;
        } catch (error) {
            console.error("Erro na leitura do arquivo.");
        }
    }
})