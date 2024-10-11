///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS net.creativecouple.validation:fast-isbn:1.2.1

import net.creativecouple.validation.isbn.ISBN;
import static java.lang.System.*;

public class isbn13 {

    public static void main(String... args) {
        var isbn = ISBN.valueOf(args[0]);
        out.println(isbn.toString());
    }
}
