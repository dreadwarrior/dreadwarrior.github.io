///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS net.creativecouple.validation:fast-isbn:1.2.7

import net.creativecouple.validation.isbn.ISBN;

public class isbn13 {

    public static void main(String... args) {
        var isbn = ISBN.valueOf(args[0]);
        System.out.println(isbn.toString());
    }
}
