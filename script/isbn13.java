///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS de.creativecouple.validation:fast-isbn:1.1.10

import de.creativecouple.validation.isbn.ISBN;
import static java.lang.System.*;

public class isbn13 {

    public static void main(String... args) {
        var isbn = ISBN.valueOf(args[0]);
        out.println(isbn.toString());
    }
}
