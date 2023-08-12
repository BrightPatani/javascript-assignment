document.addEventListener('DOMContentLoaded', () => {
        const labels = document.querySelectorAll('label');
        const inputs = document.querySelectorAll('input');
        const button = document.querySelector('button');
        const paragraphs = document.querySelectorAll('p');
        const listItems = document.querySelectorAll('li');
        const link = document.querySelector('a');
        const image = document.querySelector('img');
        const mainElement = document.querySelector('main');
        const heading = document.querySelector('h1') 
        const bodyElement = document.querySelector('body')
      
      labels.forEach(label => {
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '5px';
      });
      
      inputs.forEach(input => {
        input.style.width = '90%';
        input.style.padding = '8px';
        input.style.marginBottom = '10px';
        input.style.borderRadius = '5px';
      });
      
        button.style.backgroundColor = '#107b7f';
        button.style.color = '#ffff';
        button.style.padding = '10px 20px';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
      
        paragraphs.forEach(paragraph => {
        paragraph.style.textAlign = 'center';
        paragraph.style.margin = '20px';
      });
      
      listItems.forEach(listItem => {
        listItem.style.listStyleType = 'disc';
        listItem.style.marginLeft = '20px';
      });
      
        link.style.color = '#037bff';
              
        image.style.display = 'flex';
        image.style.maxWidth = '80%';
        image.style.margin = '20px auto';
                
        mainElement.style.backgroundColor = '#f1eaea';
        mainElement.style.padding = '20px';
        mainElement.style.margin = '20px auto';
        
        bodyElement.style.padding = '50%';
        bodyElement.style.width = '100px';
        bodyElement.style.height = '100px';
        bodyElement.style.marginTop = '-48%';
        bodyElement.style.display = 'flex';       

        heading.style.fontSize = '48px';
        heading.style.padding = '20px';
        heading.style.textAlign = 'center';
    });




    
// document.addEventListener('DOMContentLoaded', () => {
//   const docs = document.querySelectorAll('label, input, button, p, li, a, img, main, h1, body');
   
//   docs.forEach(label => {
//         label.style.fontWeight = 'bold';
//         label.style.marginBottom = '5px';
//       });
      
//   docs.forEach(input => {
//         input.style.width = '90%';
//         input.style.padding = '8px';
//         input.style.marginBottom = '10px';
//         input.style.borderRadius = '5px';
//       });
      
//   docs.forEach(button => {
//         button.style.backgroundColor = '#107b7f';
//         button.style.color = '#fff';
//         button.style.padding = '10px 20px';
//         button.style.borderRadius = '5px';
//         button.style.cursor = 'pointer';
//       });

//   docs.forEach(p => {
//         paragraph.style.textAlign = 'center';
//         paragraph.style.margin = '20px';
//       });
      
//   docs.forEach(li => {
//         li.style.listStyleType = 'disc';
//         li.style.marginLeft = '20px';
//       });
      
//   docs.forEach(a => {
//         a.style.color = '#037bff';
//       });
       
//   docs.forEach(img => {
//         img.style.display = 'flex';
//         img.style.maxWidth = '80%';
//         img.style.margin = '20px auto';
//       });
      
//   docs.forEach(main => {
//         main.style.backgroundColor = '#f1eaea';
//         main.style.padding = '20px';
//         main.style.margin = '20px auto';
//       });
//   docs.forEach(body => {  
//         body.style.padding = '50%';
//         body.style.width = '100px';
//         body.style.height = '100px';
//         body.style.marginTop = '-48%';
//         body.style.display = 'flex';       
//       });
//   docs.forEach(h1 => {
//         h1.style.fontSize = '48px';
//         h1.style.padding = '20px';
//         h1.style.textAlign = 'center';
//     });
//   });