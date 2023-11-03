package principal;

import org.springframework.stereotype.Service;

@Service
public class NameSplitService {

    public String[] splitName(String name) {
        return name.split(" ");
    }

}
