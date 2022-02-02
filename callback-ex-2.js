const willThanosKillMe = (name, cb1, cb2) => {
    const nameLength = name.length;
    if (nameLength / 2 === 0) {
        cb1();
    } else {
        cb2();
    }
}


const printMsgToKill = () => {
    console.log("Thanos will kill you");
}

const printMsgToNotKill = () => {
    console.log("Thanos will not kill you")
}

willThanosKillMe("rajes", printMsgToKill, printMsgToNotKill);