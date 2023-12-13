///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS de.creativecouple.validation:isbn-core:1.0.14

import de.creativecouple.validation.isbn.ISBN;
import static java.lang.System.*;

public class isbn13 {

    public static void main(String... args) {
        var isbn = ISBN.valueOf(args[0]);
        out.println(isbn.toString());
    }
}
