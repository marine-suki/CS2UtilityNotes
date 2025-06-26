document.addEventListener('DOMContentLoaded', function() {
    console.log('Tooltip JS已加载');
    
    // 为所有带有[data-tooltip-img]属性的元素添加点击事件
    const triggerElements = document.querySelectorAll('[data-tooltip-img]');
    
    triggerElements.forEach(element => {
        // 自动添加交互样式
        if (element.style.cursor !== 'pointer') {
            element.style.cursor = 'pointer';
            element.style.borderBottom = '1px dashed #3B82F6';
            element.style.color = '#3B82F6';
        }
        
        // 检查是否已存在tooltip子元素
        let tooltip = element.querySelector('.custom-tooltip');
        if (!tooltip) {
            // 创建tooltip子元素
            tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.style.display = 'none';
            element.appendChild(tooltip);
        }
        
        // 创建或更新图片
        let img = tooltip.querySelector('img');
        if (!img) {
            img = document.createElement('img');
            tooltip.appendChild(img);
        }
        
        // 更新图片属性
        const imgUrl = element.getAttribute('data-tooltip-img');
        img.src = imgUrl;
        img.alt = element.getAttribute('data-tooltip-alt') || 'Tooltip Image';
        
        // 图片加载失败处理
        img.onerror = function() {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTUwIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KICA8cmVjdCB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEzMCIgZmlsbD0iI2NjYyIgb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8dGV4dCB4PSI1MCIgeT0iODAiIGZpbGw9IiM0NDRiNWYiIGZpbGwtb3BhY2l0eT0iMC44IiBmb250LXdpZHRoPSIzIiBmb250LXNpemU9IjE1Ij4KICAgIEltYWdlIE1pc3NpbmcKICA8L3RleHQ+CiAgPHBhdGggZD0iTTEwMCA0MEwxMDAgMTAwTDE1MCAxMDBMMTUwIDQwTDEwMCA0weiIgZmlsbD0iIzQ0NGI1ZiIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPC9zdmc+';
            img.alt = '图片加载失败';
        };
        
        // 设置图片样式
        img.style.maxWidth = '280px';
        img.style.maxHeight = '280px';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.borderRadius = '4px';
        
        // 点击事件
        element.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡到父元素
            
            // 切换tooltip显示状态
            if (tooltip.style.display === 'block') {
                hideTooltip(tooltip);
            } else {
                showTooltip(tooltip, element);
            }
        });
        
        // 点击tooltip内部关闭（防止冒泡）
        tooltip.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // 点击页面其他地方关闭所有tooltip
    document.addEventListener('click', function() {
        document.querySelectorAll('.custom-tooltip').forEach(tooltip => {
            hideTooltip(tooltip);
        });
    });
    
    // 显示tooltip
    function showTooltip(tooltip, element) {
        // 计算位置（相对于父元素）
        tooltip.style.top = '0'; // 显示在上方
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.display = 'block';
    
        // 触发动画
        setTimeout(() => {
            void tooltip.offsetWidth;
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(-50%) translateY(-100%)';
        }, 10);
    }
    
    // 隐藏tooltip
    function hideTooltip(tooltip) {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 300);
    }
});