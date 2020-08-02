function SaveOptions() {
    localStorage.autoplay = document.getElementById("autoplay").checked;
    localStorage.autoplayRestart = document.getElementById("autoplayRestart").checked;
    localStorage.showFieldOnStart = document.getElementById("showFieldOnStart").checked;
    localStorage.theme = document.getElementById("theme").value;
    localStorage.blockWidth = document.getElementById("blockWidth").value;
    localStorage.autoBlockWidth = document.getElementById("autoBlockWidth").checked;
    localStorage.autoBlockSize = document.getElementById("autoBlockSize").value;
    localStorage.difficulty = document.getElementById("difficulty").value;
    localStorage.speed = document.getElementById("speed").value;
    console.log("saved");
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({
      message: 'Settings Saved'
    });
    setTimeout(updateSettings(), 2500);
  }
  
  function ResetOptions() {
    localStorage.autoplay = false;
    localStorage.autoplayRestart = true;
    localStorage.showFieldOnStart = true;
    localStorage.theme = "retro";
    localStorage.blockWidth = 10;
    localStorage.autoBlockWidth = false;
    localStorage.autoBlockSize = 24;
    localStorage.difficulty = "normal";
    localStorage.speed = 20;
    console.log("reset");
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({
      message: 'Settings Reset'
    });
    LoadOptions();
  }
  
  function LoadOptions() {
    document.getElementById("autoplay").checked = localStorage.autoplay == "true";
    document.getElementById("autoplay").parentNode.MaterialSwitch.onChange_();
    document.getElementById("autoplayRestart").checked = localStorage.autoplayRestart == "true";
    document.getElementById("autoplayRestart").parentNode.MaterialSwitch.onChange_();
    document.getElementById("showFieldOnStart").checked = localStorage.showFieldOnStart == "true";
    document.getElementById("showFieldOnStart").parentNode.MaterialSwitch.onChange_();
    document.getElementById("theme").value = localStorage.theme;
    document.getElementById("blockWidth").value = localStorage.blockWidth;
    document.getElementById("autoBlockWidth").checked = localStorage.autoBlockWidth == "true";
    document.getElementById("autoBlockWidth").parentNode.MaterialSwitch.onChange_();
    document.getElementById("autoBlockSize").value = localStorage.autoBlockSize;
    document.getElementById("difficulty").value = localStorage.difficulty;
    document.getElementById("speed").value = localStorage.speed;
    console.log("loaded");
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({
      message: 'Settings Loaded'
    });
    setTimeout(updateSettings(), 2500);
    document.getElementById("loading").remove();
  }
  if (localStorage.autoplay === undefined) {
    setTimeout(ResetOptions, 2000);
  } else {
    setTimeout(LoadOptions, 2000);
  }
  document.getElementById('save').addEventListener('click', SaveOptions);
  document.getElementById('reset').addEventListener('click', ResetOptions);
  
  function updateSettings() {
    console.log("created game");
    var $demo = $('.game').blockrain({
      autoplay: localStorage.autoplay == "true",
      autoplayRestart: localStorage.autoplayRestart == "true",
      showFieldOnStart: localStorage.showFieldOnStart == "true",
      theme: localStorage.theme,
      blockWidth: localStorage.blockWidth,
      autoBlockWidth: localStorage.autoBlockWidth == "true",
      autoBlockSize: localStorage.autoBlockSize,
      difficulty: localStorage.difficulty,
      speed: localStorage.speed,
      playText: "",
      playButtonText: "Play",
      gameOverText: "Game Over",
      restartButtonText: "Play Again",
      scoreText: "Score",
    });
    $demo.blockrain('theme', localStorage.theme);
  }