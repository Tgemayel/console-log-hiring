const MESSAGE = `

         ______ _____ _____ __  __          
        |  ____|_   _/ ____|  \\/  |   /\\    
        | |__    | || |  __| \\  / |  /  \\            Passionate about design? Come work at Figma!
        |  __|   | || | |_ | |\\/| | / /\\ \\                    https://figma.com/careers/
        | |     _| || |__| | |  | |/ ____ \\ 
        |_|    |_____\\_____|_|  |_/_/    \\_\\                                                                                                                                                                                                   
                                                                                                                                       


`;

export const careersConsole = () => {
  const isCsr = typeof window !== 'undefined';
  const shouldLog =
    isCsr &&
    window.console &&
    typeof console.log === 'function' &&
    window.location.hostname !== 'figma.com';

  if (!shouldLog) {
    return;
  }

  console.log(MESSAGE);
};
