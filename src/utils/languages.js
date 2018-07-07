const supportedLaguage = [
    'c',
    'cpp',
    'php',
    'java',
    'python',
    'go'
]

const SampleCode = {
    'c': {
        'filename': 'main.c',
        'code': '#include<stdio.h>\n\nint main()\n{\n    printf("Hello, World!\\n");\n}'
    },
    'php': {
        'filename': 'main.php',
        'code': '<?php\n    echo"Hello, Word";'
    },
    'cpp': {
        'filename': 'main.cpp',
        'code': '#include <iostream>\n\nint main()\n{\n    std::cout << "Hello, World!\\n";\n}'
    },
    'java': {
        'filename': 'Hi.java',
        'code': 'public class Hi {\n \tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}'
    },
    'python': {
        'filename': 'main.py',
        'code': '#!/usr/bin/python\n\nprint(\'Hello World!\')'
    },
    'go': {
        'filename': 'main.go',
        'code': 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, 世界!")\n}'
    }
}

function CodeMirrorMode(language) {
    switch (language) {
        case 'c':
            return 'text/x-csrc'
        case 'cpp':
            return 'text/x-csrc'
        case 'java':
            return 'text/x-java'
        case 'c#':
            return 'text/x-csharp'
        case 'objext-c':
            return 'text/x-objectivec'
        case 'scale':
            return 'text/x-scala'
        case 'squirrel':
            return 'text/x-squirrel'
        case 'lua':
            return 'text/x-lua'
        case 'php':
            return 'text/x-php'
        case 'python':
            return 'text/x-python'
        case 'go':
            return 'text/x-go'
        default:
            return 'text/x-csrc'
    }
}

export { supportedLaguage, SampleCode, CodeMirrorMode }
