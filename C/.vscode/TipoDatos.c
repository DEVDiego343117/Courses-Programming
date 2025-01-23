#include <stdio.h>
#include <stdbool.h>

int main (){
    char letter = 'a';
    char word[] = "Hola";
    float pi = 3.1415926;
    double pi2 = 3.141592653589793;
    bool answer = true;
    unsigned char y = 255;
    int number =2025;
    
    printf("%c\n" ,letter);
    printf("%f\n" ,pi);
    printf("%lf\n" ,pi2);
    printf("%d\n" ,answer);
    printf("%d\n" ,y);
    printf("%i" ,number);

    return 0;
}

