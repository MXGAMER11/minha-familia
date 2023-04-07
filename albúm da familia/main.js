var imagens =["https://marcelomeneses.files.wordpress.com/2011/06/vovc3b3.jpg", 
"https://2.bp.blogspot.com/-V-XOmzzueK0/W01Ty6iQYVI/AAAAAAABVbo/JLoE7jIiSBkaq7_eOycdoB2F6CcG40m8wCLcBGAs/s1600/clipart-dia-da-vov%25C3%25B3-imagem-colorida-figura-desenho-cliparts-vov%25C3%25B3-vov%25C3%25B4-av%25C3%25B3s-netos-idoso-idosos-%2B%252817%2529.jpg", 
"https://img.freepik.com/vetores-premium/desenho-animado-infantil-abracando-seu-pai-com-amor_244307-167.jpg", 
"https://static.vecteezy.com/ti/vetor-gratis/p3/1818492-mae-com-bebe-desenho-gratis-vetor.jpg",
"https://img.freepik.com/vetores-gratis/ilustracao-de-irmaos-desenhados-a-mao_23-2149604227.jpg?w=2000"];

var nomes = ["Elaine", "Rubens", "Gustavo", "Eliz", "Daniel e Murilo" ]

var i = 0;
function update()
{
   i++;
    var numbersOfFamilyMemberInArray = 5
    if(i < numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("imagens").src = updatedImage;
    document.getElementById("nomes").innerHTML = updatedName;
}