﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.ViewModel.Common
{
    public class PageRequestBase
    {
        public int pageIndex { get; set; }
        public int pageSize { get; set; }
    }
}
