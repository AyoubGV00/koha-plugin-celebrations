fetch('/api/v1/contrib/Celebrations-api/static/images/background-chinese-new-year.jpg')
  .then(res => res.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.onload = () => {
      document.body.style.backgroundImage = `url('${reader.result}')`;
    };
    reader.readAsDataURL(blob);
  });