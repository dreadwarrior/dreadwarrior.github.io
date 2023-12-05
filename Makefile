SHELL := bash

# Using "@" is suppressing the output of the command being executed.
# Using "@-" is additionally suppressing the STDERR output of that command.
formatted-isbn:
	@jbang --quiet ./script/isbn13.java $(shell read -p "ISBN: " isbn; echo $$isbn)
.PHONY: formatted-isbn

book:
	@{ \
		formatted_isbn="$$(make formatted-isbn)"; \
		\
		echo "Did you completed the book?"; \
		completed="$$( \
                   	select completed in "Yes" "No"; do \
                   		echo $$completed; \
                   		exit; \
                   	done; \
                   )"; \
	    \
	    echo "What language was the book written in?"; \
	    archetype_kind="$$( \
                        	select language in "english" "german"; do \
                        		case $$language in \
                        			english ) echo "--kind books.openlibrary";exit;; \
                        			german ) exit;; \
                        		esac \
                        	done; \
                        )"; \
		\
		if [[ "x$${completed}" = "xNo" ]]; then \
			echo "Generating book content for ISBN $${formatted_isbn} in bookshelf 'wishlist'"; \
			\
			hugo new content $${archetype_kind} books/$${formatted_isbn}.md; \
			sed -i.bak "s~###BOOKSHELF###~wishlist~g" content/books/$${formatted_isbn}.md; \
			rm -f content/books/$${formatted_isbn}.md.bak; \
			git add content/books/$${formatted_isbn}.md; \
		elif [[ "x$${completed}" = "xYes" ]]; then \
			echo "Generating book content for ISBN $${formatted_isbn} in bookshelf 'completed'"; \
			\
			hugo new content $${archetype_kind} books/$${formatted_isbn}/index.md; \
			sed -i.bak "s~###BOOKSHELF###~completed~g" content/books/$${formatted_isbn}/index.md; \
			rm -f content/books/$${formatted_isbn}/index.md.bak; \
			cp ./archetypes/review.md.dist content/books/$${formatted_isbn}/review.md; \
			git add content/books/$${formatted_isbn}/; \
		fi; \
	}
.PHONY: book