package org.baseframework.security.service.Imp;

import org.baseframework.security.models.AuthUsers;
import org.baseframework.security.models.Users;
import org.baseframework.security.repository.UsersRepository;
import org.baseframework.security.service.UserService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImp implements UserDetailsService, UserService {

    @Resource
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = usersRepository.getUsersByLoginName(username);
        if (users != null) {
            List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
            authorities.add(new SimpleGrantedAuthority("ADMIN"));
            return new AuthUsers(users.getLoginName(), users.getLoginPassword(), authorities);
        } else {
            throw new UsernameNotFoundException("用户不存在");
        }
    }

    @Override
    public Users Eidt(Users users) {
        Users model = usersRepository.saveAndFlush(users);
        return  model;
    }

    @Override
    public Users FindByName(String Name) {
        Users users = usersRepository.getUsersByLoginName(Name);
        return users;
    }
}
